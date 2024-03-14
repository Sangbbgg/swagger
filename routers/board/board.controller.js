const page = [{ num: 1, name: "1번 페이지" }];

const boardController = {
  getPage: (req, res) => {
    res.json({ ok: true, page: page });
  },
};

export default boardController;
