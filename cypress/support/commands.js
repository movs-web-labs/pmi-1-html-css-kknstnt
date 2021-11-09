const { addMatchImageSnapshotCommand } = require("cypress-image-snapshot/command");

addMatchImageSnapshotCommand({
  customSnapshotsDir: "snapshots",
});
