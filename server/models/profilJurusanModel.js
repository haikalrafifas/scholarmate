const Sequelize = require("sequelize");
const db = require("../config/db");

const { DataTypes, UUIDV4 } = Sequelize;

// Model ProgramStudi
const ProgramStudi = db.define(
  "ProgramStudi",
  {
    prodi_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true,
    },
    nama_prodi: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    informasi_prodi: {
      type: DataTypes.STRING(512),
      allowNull: false,
    },
    gambaran_matkul: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    jumlah_pencarian: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "program_studi",
    timestamps: false,
  }
);

// Model Rumpun
const Rumpun = db.define(
  "Rumpun",
  {
    rumpun_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    nama_rumpun: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
  },
  {
    tableName: "rumpun",
    timestamps: false,
  }
);

// Model RumpunProdi
const RumpunProdi = db.define(
  "RumpunProdi",
  {
    rumpun_prodi_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    rumpun_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    prodi_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
  },
  {
    tableName: "rumpun_prodi",
    timestamps: false,
  }
);

// Model TempatKuliah
const TempatKuliah = db.define(
  "TempatKuliah",
  {
    tempat_kuliah_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    prodi_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    universitas_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
  },
  {
    tableName: "tempat_kuliah",
    timestamps: false,
  }
);

// Model Universitas
const Universitas = db.define(
  "Universitas",
  {
    universitas_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true,
    },
    nama_universitas: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "universitas",
    timestamps: false,
  }
);

// Model Karir
const Karir = db.define(
  "Karir",
  {
    karir_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    }
  },
  {
    tableName: "karir",
    timestamps: false,
  }
)

// Model ProspekKarir
const ProspekKarir = db.define(
  "ProspekKarir",
  {
    prospek_karir_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    prodi_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    karir_id: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  },
  {
    tableName: "prospek_karir",
    timestamps: false,
  }
);

// Hubungan antara tabel ProgramStudi dan RumpunProdi melalui Rumpun
ProgramStudi.hasMany(RumpunProdi, {
  foreignKey: "prodi_id",
});
RumpunProdi.belongsTo(ProgramStudi, {
  foreignKey: "prodi_id",
});

// Hubungan antara tabel ProgramStudi dan TempatKuliah
ProgramStudi.hasMany(TempatKuliah, {
  foreignKey: "prodi_id",
});
TempatKuliah.belongsTo(ProgramStudi, {
  foreignKey: "prodi_id",
});

// Hubungan antara tabel ProgramStudi dan Universitas melalui TempatKuliah
ProgramStudi.belongsToMany(Universitas, {
  through: TempatKuliah,
  foreignKey: "prodi_id",
});
Universitas.belongsToMany(ProgramStudi, {
  through: TempatKuliah,
  foreignKey: "universitas_id",
});

// Hubungan antara tabel Rumpun dan RumpunProdi melalui ProgramStudi
Rumpun.belongsToMany(ProgramStudi, {
  through: RumpunProdi,
  foreignKey: "rumpun_id",
});
ProgramStudi.belongsToMany(Rumpun, {
  through: RumpunProdi,
  foreignKey: "prodi_id",
});

// Hubungan antara tabel TempatKuliah dan Universitas
Universitas.hasMany(TempatKuliah, {
  foreignKey: "universitas_id",
});
TempatKuliah.belongsTo(Universitas, {
  foreignKey: "universitas_id",
});

// Hubungan antara tabel Rumpun dan RumpunProdi
RumpunProdi.hasMany(Rumpun, {
  foreignKey: "rumpun_id",
});
Rumpun.belongsTo(RumpunProdi, {
  foreignKey: "rumpun_id",
});

// Hubungan antara tabel ProgramStudi dan Karir melalui ProspekKarir
Karir.belongsToMany(ProgramStudi, {
  through: ProspekKarir,
  foreignKey: "karir_id",
})
ProgramStudi.belongsToMany(Karir, {
  through: ProspekKarir,
  foreignKey: "prodi_id",
})

// Hubungan antara tabel Karir dan ProspekKarir
Karir.hasMany(ProspekKarir, {
  foreignKey: "karir_id",
});
ProspekKarir.belongsTo(Karir, {
  foreignKey: "karir_id",
});

ProgramStudi.hasMany(ProspekKarir, {
  foreignKey: "prodi_id",
});
ProspekKarir.belongsTo(ProgramStudi, {
  foreignKey: "prodi_id",
});

// Ekspor model-model
module.exports = {
  ProgramStudi,
  Rumpun,
  RumpunProdi,
  TempatKuliah,
  Universitas,
  Karir,
  ProspekKarir,
};
