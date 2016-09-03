API Endpoints

  HTML API

    Root

        GET / - loads React web app

  JSON API

    Users

        POST /api/users
        PATCH /api/users

    Session

        POST /api/session
        DELETE /api/session
        GET /api/session

    CheckIns

        GET /api/checkIns
        POST /api/checkIns
        GET /api/checkIns/:id
        PATCH /api/checkIns/:id

    Comments

        GET /api/checkIns/:id/comments
        POST /api/checkIns/:id/comments
        DELETE /api/checkIns/:id/comments

    Loves

        GET /api/checkIns/:id/loves
        POST /api/checkIns/:id/loves
        DELETE /api/checkIns/:id/loves

    Friendships

        GET /api/friendships
        POST /api/friendships
        GET /api/friendships/:id
        DELETE /api/friendships/:id

        maybe

        GET /api/users/friendships
        POST /api/users/friendships
        GET /api/users/friendships/:id
        DELETE /api/users/friendships/:id

    Drinks  (bonus)
        GET /api/drinks
        POST /api/drinks
        GET /api/drinks/:id
        DELETE /api/drinks/:id

    Locations  (bonus)
        GET /api/locations
        POST /api/locations
        GET /api/locations/:id
        DELETE /api/locations/:id
