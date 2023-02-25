const express = require("express");
const mongoose = require("mongoose");
const ServiceModel = require("../model/service.model");

module.exports.getServices = async (req, res) => {
  try {
    const service = await ServiceModel.find();
    res.send(service);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports.addService = async (req, res) => {
  let newService = new ServiceModel({
    title: req.body.title,
  });

  try {
    const addedService = await newService.save();
    res.send(addedService);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports.deleteService = async (req, res) => {
  try {
    const service = await ServiceModel.findById(req.params.id);
    const ser = service.remove();
    res.send(ser);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports.getById = async (req, res) => {
  try {
    const service = await ServiceModel.findById(req.params.id);
    res.send(service);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports.updateService = async (req, res) => {
  try {
    const service = await ServiceModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
        },
      }
    );
    res.send(service);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};
