const users = [
    { id: 1, name: "유저1" },
    { id: 2, name: "유저2" },
    { id: 3, name: "유저3" },
  ];
  
  const userController = {
    getUsers: (req, res) => {
      res.json({ ok: true, users: users });
    },
    findOneUser1: (req, res) => {
      const user_id = req.query.user_id;
      const user = users.filter((data) => data.id == user_id);
      res.json({ ok: true, user: user });
    },
    findOneUser2: (req, res) => {
      const user_id = req.params.user_id;
      const user = users.filter((data) => data.id == user_id);
      res.json({ ok: true, user: user });
    },
    createUser: (req, res) => {
      const { id, name } = req.body;
      const user = users.concat({ id, name });
      res.json({ ok: true, users: user });
    },
    setUsers: (req, res) => {
      const { id, name } = req.body;
      const user = users.map((data) => {
        if (data.id == id) data.name = name;
        return { id: data.id, name: data.name };
      });
      res.json({ ok: true, users: user });
    },
    setUser: (req, res) => {
      const { user_id } = req.params;
      const { name } = req.body;
      const user = users.map((data) => {
        if (data.id == user_id) data.name = name;
        return { id: data.id, name: data.name };
      });
      res.json({ ok: true, users: user });
    },
    delUser: (req, res) => {
      const user_id = req.query.user_id;
      const user = users.filter((data) => data.id != user_id);
      res.json({ ok: true, users: user });
    }
  };
  
  export default userController;