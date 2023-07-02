import Joi from "joi";
import { Game, GameCreated } from "../protocols/index";

const gameCreatedSchema = Joi.object<GameCreated>({
    name: Joi.string().required(),
    price: Joi.number().required()
})

const gameUpdatedSchema = Joi.object<Game>({
    id: Joi.number().required(),
    name: Joi.string().required(),
    price: Joi.number().required()
})

const schemas = {
    gameCreatedSchema,
    gameUpdatedSchema,
}
export default schemas