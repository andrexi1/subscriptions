import React, { useState } from "react";

const FormAddSubs = ({
  setType,
  setPrice,
  type,
  price,
  setSubs,
  subs,
  editId,
  setEditId,
  spent,
  count
}) => {
  const [error, setError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);

  const handleSubs = (e) => {
    e.preventDefault();
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    if (count-spent < Number(price)) {
      setErrorMoney(true)
      return
    }
    setError(false);
    setErrorMoney(false)

    if (editId !== "") {
      const newSubs = subs.map((item) => {
        if (item.id === editId) {
          item.type = type;
          item.price = price;
        }
        return item;
      });
      setSubs(newSubs);
      setEditId("");
    } else {
      const data = {
        type: type,
        price: price,
        id: Date.now(),
      };
      setSubs((subs) => [...subs, data]);
    }

    setType("");
    setPrice("");
  };

  return (
    <div className="add-subscription">
      <h3>Agregar Suscripciones</h3>
      <form onSubmit={handleSubs}>
        <p>Servicios</p>
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="">--Elegir--</option>
          <option value="netflix">--Netflix--</option>
          <option value="disneyPlus">--Disney Plus--</option>
          <option value="hboMax">--HBO Max--</option>
          <option value="starPlus">--Star Plus--</option>
          <option value="primeVideo">--Prime Video--</option>
          <option value="spotify">--Spotify--</option>
          <option value="appleTv">--Apple Tv--</option>
        </select>
        <p>Cantidad</p>
        <input
          type="number"
          placeholder="20$"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        {editId !== "" ? (
          <input type="submit" value="Guardar" />
        ) : (
          <input type="submit" value="Agregar" />
        )}
      </form>
      {error ? <p className="error">Campos inválidos</p> : null}
      {errorMoney ? <p className="error">No tienes presupuesto</p> : null}
    </div>
  );
};

export default FormAddSubs;
