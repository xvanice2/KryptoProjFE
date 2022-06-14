import React from "react";

const DecComponent = ({
  decMessage,
  decN,
  decD,
  decDecMessage,
  setDecState,
  decryptButtonHandler,
}) => {
  return (
    <>
      <h3>Decryption</h3>
      <br />

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Zprava:</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={decMessage}
          onChange={(e) => setDecState("decMessage", e.target.value)}
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
          value={decN}
          onChange={(e) => setDecState("decN", e.target.value)}
        />
      </div>
      <br />
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">d:</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={decD}
          onChange={(e) => setDecState("decD", e.target.value)}
        />
      </div>
      <button
        type="button"
        class="btn btn-success"
        onClick={decryptButtonHandler}
      >
        Decrypt
      </button>
      <br />
      <br />
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Desifrovana zprava:</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={decDecMessage}
          readOnly
        />
      </div>
    </>
  );
};

export default DecComponent;
