"use strict";
import { post } from "../index";

//判断用户登录
export const login = (requestParams) => post("/api/user/login", requestParams);
