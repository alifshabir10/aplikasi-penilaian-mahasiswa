import React, { useState } from "react";

const Aspek = [
  { id: 1, label: "Aspek Penilaian 1", key: "aspek_penilaian_1" },
  { id: 2, label: "Aspek Penilaian 2", key: "aspek_penilaian_2" },
  { id: 3, label: "Aspek Penilaian 3", key: "aspek_penilaian_3" },
  { id: 4, label: "Aspek Penilaian 4", key: "aspek_penilaian_4" },
];

const Mahasiswa = [
  { id: 1, label: "Mahasiswa 1", key: "mahasiswa_1" },
  { id: 2, label: "Mahasiswa 2", key: "mahasiswa_2" },
  { id: 3, label: "Mahasiswa 3", key: "mahasiswa_3" },
  { id: 4, label: "Mahasiswa 4", key: "mahasiswa_4" },
  { id: 5, label: "Mahasiswa 5", key: "mahasiswa_5" },
  { id: 6, label: "Mahasiswa 6", key: "mahasiswa_6" },
  { id: 7, label: "Mahasiswa 7", key: "mahasiswa_7" },
  { id: 8, label: "Mahasiswa 8", key: "mahasiswa_8" },
  { id: 9, label: "Mahasiswa 9", key: "mahasiswa_9" },
  { id: 10, label: "Mahasiswa 10", key: "mahasiswa_10" },
];

function App() {
  const [penilaian, setPenilaian] = useState({});

  const handleInputChange = (event, aspek, mahasiswa) => {
    const { value } = event.target;
    setPenilaian((prevState) => ({
      ...prevState,
      [aspek]: {
        ...(prevState[aspek] || {}),
        [mahasiswa]: parseInt(value),
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simpan data penilaian ke database atau lakukan tindakan lain yang diinginkan
    console.log(penilaian);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">
        Aplikasi Penilaian Mahasiswa
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {Mahasiswa.map((mahasiswa, index) => (
          <div key={mahasiswa.id} className="grid grid-cols-5 gap-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">{mahasiswa.label}</h2>
            </div>
            {Aspek.map((aspek) => (
              <div key={aspek.id} className="">
                <label htmlFor={aspek} className="block mb-2">
                  {aspek.label}
                </label>
                <input
                  type="number"
                  id={aspek.id}
                  name={aspek.key}
                  onChange={(e) =>
                    handleInputChange(e, aspek.key, mahasiswa.key)
                  }
                  className=" py-2 px-3 border border-gray-300 rounded w-full"
                />
              </div>
            ))}
          </div>
        ))}
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded "
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
