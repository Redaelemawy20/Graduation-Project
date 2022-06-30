require("dotenv").config();
const CronJob = require("cron").CronJob;
const Rsync = require("rsync");
const https = require("https");
const { NodeSSH } = require("node-ssh");

process.title = "node-backup-script";
// The value of process.platform will be:
// Windows: win32
// Mac: darwin
// Ubuntu: linux
const syncProgram = process.platform === "win32" ? "robocopy" : "rsync";
rsync = new Rsync()
  .executable(syncProgram)
  // The -a flag means "archive" to say we are copying the full directory not just a file
  .flags("a")
  .source(process.env.SOURCE_DIR)
  .destination(process.env.DESTINATION_DIR);

const job = new CronJob(
  // Run this function once every minute
  process.env.CRON_STRING,
  () => {
    rsync.execute((error, code, cmd) => {
      let result;
      if (error) {
        // List of rsync status codes
        // https://stackoverflow.com/a/20738063
        result = `Code ${code} ${error?.message}`;
        job.stop();
      } else {
        result = "Backup complete";
      }

      const currentDate = new Date().toISOString();
      // Write log to the console, or will be redirected to a
      // nohup.out file if using nohup
      process.stdout.write(`${currentDate}: ${result}\n`);
    });
  },
  null,
  true,
  // Replace with your time zone
  // https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a
  "America/Toronto"
);

// Begin the cronjob
job.start();
