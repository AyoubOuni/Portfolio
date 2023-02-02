import * as yup from 'yup'

export const nomvalidation=yup.object().shape({
  nom:yup.string().min(2).max(15).required()})
export const prenomvalidation=yup.object().shape({
  prenom:yup.string().min(2).max(15).required()})
export const emailvalidation=yup.object().shape({
  email:yup.string().email().required()})
export const telvalidation=yup.object().shape({
  tel:yup.string().required().matches(/^[0-9]+$/).min(8).max(8)})
export const cinvalidation=yup.object().shape({
  cin:yup.string().required().matches(/^[0-9]+$/).min(8).max(8)})