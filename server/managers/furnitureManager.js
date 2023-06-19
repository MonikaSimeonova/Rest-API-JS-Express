const Furniture = require('../models/Furniture')

exports.create = (furnitureData) => Furniture.create(furnitureData);

exports.getAll = async(query) => {
    const where = query.where;
    
    let queryString = Furniture.find();
    
    if(where){
        const [fieldNAme,ownerId ] = where.split('=')
        ownerId = ownerId.replaceAll('"', '');
        queryString = queryString.where('_ownerId').eq(ownerId);
    }
    const result  = await queryString;
    return result

}

exports.getOne = (furnitureId) => Furniture.findById(furnitureId);

exports.update = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.delete = (furnitureId) => Furniture.findByIdAndDelete(furnitureId);