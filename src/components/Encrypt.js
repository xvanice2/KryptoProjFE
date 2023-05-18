import React from "react";

const EncComponent = ({
  encMessage,
  encN,
  encE,
  encEncMessage,
  setEncState,
  encryptButtonHandler,
}) => {
  return (
    <>
      <h3>Encryption</h3>
      <br />

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Zprava:</span>
        </div>
        <input
          type="number"
          min="0"
          max="500000"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={encMessage}
          onChange={(e) => setEncState("encMessage", e.target.value)}
        />
      </div>
      <br />
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">n:</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={encN}
          onChange={(e) => setEncState("encN", e.target.value)}
        />
      </div>
      <br />
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">e:</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={encE}
          onChange={(e) => setEncState("encE", e.target.value)}
        />
      </div>
      <button
        type="button"
        class="btn btn-success"
        onClick={encryptButtonHandler}
      >
        Encrypt
      </button>
      <br />
      <br />
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Zasifrovana zprava:</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={encEncMessage}
          readOnly
        />
      </div>
    </>
  );
};

export default EncComponent;
