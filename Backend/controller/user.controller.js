const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../model/UserModel')

module.exports.getUser = async(req,res)=>{
    try {
        const User = await UserModel.find();
        res.send(User)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}

module.exports.addUser = async(req,res)=>{
    let newUser = new UserModel({
        title: req.body.title
    })

    try {
        const addedUser = await newUser.save();
        res.send(addedUser);        
    } catch (error) {
        res.status(400).json({err:error.message})
    }

}

module.exports.deleteUser = async(req,res)=>{
    try {
        const User = await UserModel.findById(req.params.id)
        const ser = User.remove();
        res.send(ser)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}

module.exports.getById = async(req,res)=>{
    try {
        const User = await UserModel.findById(req.params.id)
        res.send(User)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}

module.exports.updateUser = async(req,res)=>{
    try {
        const User = await UserModel.updateOne(
            {_id:req.params.id},
            {$set:{
                title:req.body.title
            }}
        )
        res.send(User)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}