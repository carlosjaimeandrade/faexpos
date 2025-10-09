import getAll from "../../services/actor/getActors.js";
import getOne from "../../services/actor/getActor.js";
import create from "../../services/actor/createActor.js";
import destroy from "../../services/actor/destroyActor.js";
import update from "../../services/actor/updateActor.js";
import createByList from "../../services/movies/createMovies.js";

const getActor = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(400);
      res.json({
        message: "id é obrigatório",
      });
      return;
    }

    const actor = await getOne(id)

    if (!actor) {
      res.status(404);
      res.json({
        message: "Ator não encontrado",
      });
      return;
    }

    res.status(200);

    res.json({
      data: actor
    });

  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({
      message: "ocorreu um erro",
    });
  }
};

const getActors = async (req, res) => {
  const actors = await getAll()

  res.status(200)
  res.json({
    data: actors
  });
};

const createActor = async (req, res) => {
  try {
    const { name, uf, city } = req.body;

    if (!name || !uf || !city) {
      res.status(400);
      res.json({
        message: "Nome, UF e cidade são obrigatórios",
      });
      return;
    }

    const createActor = await create(req.body);

    if (!createActor) {
      res.status(400);
      res.json({
        message: "Erro ao criar o ator",
      });
      return;
    }

    await createByList(req.body.movies, createActor.id)
    res.status(201);
    res.json({
      data: createActor,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({
      message: "ocorreu um erro",
    });
  }
};

const destroyActor = async (req, res) => {
  const id = req.params.id
  
  const actor = await destroy(id)

  if (!actor) {
    res.status(400)
    res.json({
      message: "Erro na operação"
    })
    return
  }

  res.status(200)
  res.json({
    message: "Deletado com sucesso",
    actor
  })

}

const updateActor = async (req, res) => {
  const data = req.body
  const id = req.params.id
  
  const actor = await update(data, id)

  if (!actor) {
    res.status(400)
    res.json({
      message: "não foi possivel atualizar"
    })
    return
  }

  res.status(200)
  res.json({
    message: "atualizado com sucesso",
    actor 
  })

}

export default {
  getActor,
  getActors,
  createActor,
  destroyActor,
  updateActor
};
