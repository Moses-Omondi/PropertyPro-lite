/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable one-var */
import properties from '../models/properties';

export const getAllProperties = (req, res) => {
    if (properties.length == 0) {
        return res.status(404).json({
            'status': 'error',
            'message': 'no property found'
        });
    }
    res.send(properties);
};

export const getPropertyById = (req, res) => {
    const property = properties.find((properties) => properties.id == req.params.id);
    if (!property) {
        return res.status(404).json({
            'status': 'error',
            'message': 'no property found'
        });
    }
    res.send(property);

};

export const getPropertyByType = (req, res) => {

    const property = properties.find((properties) => properties.type == req.params.type);


    return res.send(property);

};

export const createProperty = (req, res) => {

    const { owner, status, Price, State, City, Address, type, created_on, image_url } = req.body,

     newProp = {
        id: properties.length + 1,
        owner,
        status,
        Price,
        State,
        City,
        Address,
        type,
        created_on,
        image_url
    };

    properties.push[newProp];
    console.log(newProp);
    return res.status(201).json({
        'status': 'success',
        'data': newProp
    });


};
