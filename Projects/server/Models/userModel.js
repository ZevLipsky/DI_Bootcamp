import db from "../config/elephantsql.js";
import { Sequelize } from "sequelize";

const {DataTypes} = Sequelize;

const Users = db.define('users', {
        username:{
            type: DataTypes.STRING,
            required: true
        },
        password:{
            type: DataTypes.STRING,
            required: true

        },
        firstname:{
            type: DataTypes.STRING,
            required: true
        },
        lastname:{
            type: DataTypes.STRING,
            required: true
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
        profilePicture: String,
        about: String,
        coverPicture: String,
        livesin: String,
        worksat: String,
        followers: [],
        following: []
    },
    {timestamps: true}
)

// const UserModel = db.model("Users", Users);
export default Users;

// import {Sequelize} from 'sequelize';
// import db from '../config/elephantsql.js';

// const { DataTypes } = Sequelize;

// const Users = db.define('users', {
//   email: {
//     type: DataTypes.STRING
//   },
//   password: {
//     type: DataTypes.STRING
//   }
// },
// {
//   timestamps:false,
//   freezeTableName: true,
//   tableName:'users'
// })

// export default Users
