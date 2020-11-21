import { __prod__ } from "./constants";
import { Post } from "./entitites/Post";
import { MikroORM} from "@mikro-orm/core"
import path from "path";
import { User } from "./entitites/User";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, 
    },
    entities: [Post, User],
    dbName: 'full_stack_app',
    user: 'shubhankargupta',
    password: 'carmelconvent',
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];