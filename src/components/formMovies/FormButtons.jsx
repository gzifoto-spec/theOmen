const FormButtons = ({ onReset }) => {
  return (
    <div className="form-buttons">
      <button type="submit" className="btn btn-guardar">
        Guardar Película
      </button>
      <button type="reset" onClick={onReset} className="btn btn-cancelar">
        Cancelar
      </button>
    </div>
  );
};

export default FormButtons;
