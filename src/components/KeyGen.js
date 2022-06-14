import React from "react";

const KeyGenComponent = ({
  keyGenBottom,
  keyGenTop,
  keyGenP,
  keyGenQ,
  keyGenN,
  keyGenE,
  keyGenD,
  setKeyGenState,
  keyGenButtonHandler,
}) => {
  return (
    <>
      <h3>Key Generator</h3>
      <br />

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Spodni hranice:</span>
        </div>
        <input
          type="number"
          min="3"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={keyGenBottom}
          onChange={(e) => setKeyGenState("keyGenBottom", e.target.value)}
        />
      </div>
      <br />
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Horni hranice:</span>
        </div>
        <input
          type="number"
          min="5"
          max="1000"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={keyGenTop}
          onChange={(e) => setKeyGenState("keyGenTop", e.target.value)}
        />
      </div>
      <button
        type="button"
        class="btn btn-success"
        onClick={keyGenButtonHandler}
      >
        Generate key
      </button>
      <br />
      <br />
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">p:</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={keyGenP}
          readOnly
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">q:</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={keyGenQ}
          readOnly
        />
      </div>
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
          value={keyGenN}
          readOnly
        />
      </div>
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
          value={keyGenE}
          readOnly
        />
      </div>
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
          value={keyGenD}
          readOnly
        />
      </div>
    </>
  );
};

export default KeyGenComponent;
