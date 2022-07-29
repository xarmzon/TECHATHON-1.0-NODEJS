const SettingsModel = require("../models/settings.model");

const createSettings = async () => {
  await SettingsModel.create();
};

