"use strict";
module.exports = app => {
    const { router, controller } = app;
    const subRouter = router.namespace("/api/user");
    subRouter.post("/login", controller.user.index.login);
};