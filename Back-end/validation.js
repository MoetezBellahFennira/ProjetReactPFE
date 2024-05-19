const Joi = require("@hapi/joi");
//-----------------------------------------------------
const addenfantValidation = (data) => {
  const Schema = Joi.object({
    nom: Joi.string().required().min(3),
    prenom: Joi.string().required().min(3),
    dateNaissance: Joi.string().required().min(3),
    genre: Joi.string().required(),
    nomParent: Joi.string().min(3),
    nomGroupe: Joi.string().min(3),
    groupId: Joi.string().min(3),
    parentId: Joi.string().min(3),
  });

  return Schema.validate(data);
};
//-----------------------------------------------------
const addactivityValidation = (data) => {
  const Schema = Joi.object({
    id: Joi.string().required(),
    nom: Joi.string().required().min(3),
    type: Joi.string().min(3),
    date: Joi.string().required(),
  });

  return Schema.validate(data);
};
//-----------------------------------------------------
const addgroupeValidation = (data) => {
  const Schema = Joi.object({
    id: Joi.string().required(),
    nom: Joi.string().required().min(3),
    niveau: Joi.string().required(),
  });

  return Schema.validate(data);
};
//-----------------------------------------------------
const addemploiValidation = (data) => {
  const Schema = Joi.object({
    id: Joi.string().required(),
    nomGroupe: Joi.string().required(),
  });

  return Schema.validate(data);
};
//-----------------------------------------------------
const addeventValidation = (data) => {
  const Schema = Joi.object({
    id: Joi.string().required(),
    nom: Joi.string().required().min(3),
    type: Joi.string().required().min(3),
    Date: Joi.string().required().min(3),
  });

  return Schema.validate(data);
};
//-----------------------------------------------------
const RegisterValidation = (data) => {
  const Schema = Joi.object({
    nom: Joi.string().required().min(3),
    prenom: Joi.string().required().min(3),
    motDePasse: Joi.string().required().min(3),
    email: Joi.string().required().email().min(3),
    type: Joi.string().required(),
    groupId: Joi.string().required(),
  });

  return Schema.validate(data);
};
//-----------------------------------------------------
const LoginValidation = (data) => {
  const Schema = Joi.object({
    email: Joi.string().required().email().min(3),
    motDePasse: Joi.string().required().min(3),
  });

  return Schema.validate(data);
};
//-----------------------------------------------------
module.exports = {
  addenfantValidation,
  RegisterValidation,
  LoginValidation,
  addactivityValidation,
  addgroupeValidation,
  addemploiValidation,
  addeventValidation,
};
