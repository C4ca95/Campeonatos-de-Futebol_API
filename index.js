const express = require("express");
const axios = require("axios");
const fs = require("fs");
const app = express();
const port = 3000;

const API_BASE_URL = "https://apiv2.allsportsapi.com/football";
const API_KEY =
  "8ac74ecc6654fbb7e6c6569f5600da5e61f9bfd640b912e24dbacaad8a311efb";

// middleware para dividir as requisições
app.use(express.json());

//listas para guardar as reqs
let campeonatos = [];
let paises = [];

// configuração do axios
const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    APIkey: API_KEY,
  },
});

//  salva um arquivo com as listas
const salvarDados = () => {
  const data = { campeonatos, paises };
  fs.writeFileSync("dados.json", JSON.stringify(data, null, 2));
};

// Lê os dados do arquivo criado
const carregarDados = () => {
  if (fs.existsSync("dados.json")) {
    const rawData = fs.readFileSync("dados.json");
    const data = JSON.parse(rawData);
    campeonatos = data.campeonatos || [];
    paises = data.paises || [];
  }
};

// faz requisição para API e retorna os campeonatos
const carregarCampeonatosDaAPI = async () => {
  try {
    const response = await api.get("/", {
      params: {
        met: "Leagues",
      },
    });
    campeonatos = response.data.result;
    console.log("Campeonatos carregados com sucesso da API!");
  } catch (error) {
    console.error("Erro ao carregar campeonatos da API:", error);
  }
};

// faz requisição para API e retorna os países
const carregarPaisesDaAPI = async () => {
  try {
    const response = await api.get("/", {
      params: {
        met: "Countries",
      },
    });
    paises = response.data.result;
    console.log("Paises carregados com sucesso da API!");
  } catch (error) {
    console.error("Erro ao carregar paises da API:", error);
  }
};

// CRUD para Campeonatos
app.get("/campeonatos/:campeonato_id", (req, res) => {
  const campeonato = campeonatos.find(
    (c) => c.league_key === parseInt(req.params.campeonato_id),
  );
  if (campeonato) {
    res.json(campeonato);
  } else {
    res.status(404).json({ message: "campeonato nao encontrado" });
  }
});

app.get("/campeonatos", (req, res) => {
  res.status(200).json(campeonatos);
});

app.post("/campeonatos", (req, res) => {
  const newCampeonato = req.body;
  const nextLeagueKey =
    campeonatos.length > 0
      ? Math.max(...campeonatos.map((c) => c.league_key)) + 1
      : 1;

  const campeonatoToAdd = {
    ...newCampeonato,
    league_key: nextLeagueKey,
  };

  campeonatos.push(campeonatoToAdd);
  salvarDados();
  res.status(201).json(campeonatoToAdd);
});

app.put("/campeonatos/:campeonato_id", async (req, res) => {
  try {
    const campeonatoId = parseInt(req.params.campeonato_id);
    const campeonatoIndex = campeonatos.findIndex(
      (c) => c.league_key === campeonatoId,
    );

    if (campeonatoIndex === -1) {
      return res.status(404).json({ message: "campeonato nao encontrado" });
    }

    // Atualiza apenas os campos que foram passados para a requisição
    campeonatos[campeonatoIndex] = {
      ...campeonatos[campeonatoIndex],
      ...req.body,
    };

    salvarDados();
    res.json(campeonatos[campeonatoIndex]);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

app.delete("/campeonatos/:campeonato_id", async (req, res) => {
  try {
    const campeonatoId = parseInt(req.params.campeonato_id);
    const campeonatoIndex = campeonatos.findIndex(
      (c) => c.league_key === campeonatoId,
    );

    if (campeonatoIndex === -1) {
      return res.status(404).json({ message: "campeonato nao encontrado" });
    }

    campeonatos.splice(campeonatoIndex, 1);
    salvarDados();
    res.json({ message: "campeonato deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

// CRUD para Paises
app.get("/paises/:country_key", (req, res) => {
  const pais = paises.find(
    (p) => p.country_key === parseInt(req.params.country_key),
  );
  if (pais) {
    res.json(pais);
  } else {
    res.status(404).json({ message: "pais nao encontrado" });
  }
});

app.get("/paises", (req, res) => {
  res.status(200).json(paises);
});

app.post("/paises", (req, res) => {
  const newPais = req.body;
  const nextCountryKey =
    paises.length > 0 ? Math.max(...paises.map((p) => p.country_key)) + 1 : 1;

  const paisToAdd = {
    ...newPais,
    country_key: nextCountryKey,
  };

  paises.push(paisToAdd);
  salvarDados();
  res.status(201).json(paisToAdd);
});

app.put("/paises/:country_key", async (req, res) => {
  try {
    const countryKey = parseInt(req.params.country_key);
    const paisIndex = paises.findIndex((p) => p.country_key === countryKey);

    if (paisIndex === -1) {
      return res.status(404).json({ message: "pais nao encontrado" });
    }

    // Atualiza apenas os campos que foram passados para a requisição
    paises[paisIndex] = {
      ...paises[paisIndex],
      ...req.body,
    };

    salvarDados();
    res.json(paises[paisIndex]);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

app.delete("/paises/:country_key", async (req, res) => {
  try {
    const countryKey = parseInt(req.params.country_key);
    const paisIndex = paises.findIndex((p) => p.country_key === countryKey);

    if (paisIndex === -1) {
      return res.status(404).json({ message: "pais nao encontrado" });
    }

    paises.splice(paisIndex, 1);
    salvarDados();
    res.json({ message: "pais deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

// Endpoint para rebase
app.post("/rebase", async (req, res) => {
  try {
    await carregarCampeonatosDaAPI();
    await carregarPaisesDaAPI();
    salvarDados();
    res
      .status(200)
      .json({ message: "Dados atualizados a partir da API com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar dados a partir da API", error });
  }
});

// Iniciar o servidor e carregar campeonatos e paises
app.listen(port, async () => {
  carregarDados();
  console.log(`Servidor rodando em http://localhost:${port}`);
});
