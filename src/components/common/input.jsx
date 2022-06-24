import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert red-alert">{error}</div>}
    </div>
  );
};

const InputAppendGroup = ( {className='', iconClass='', name, error, ...rest} ) => {
  return (
    <div className="mb-3 ">
      <div className={`input-group`}>
          <input {...rest} name={name} id={name} className="form-control"/>
          <div className="input-group-append">
              <div className="input-group-text">
                <span className={`${iconClass===''?"fas fa-envelope":iconClass}`}></span>
              </div>
          </div>
      </div>
      {error && <div className="alert red-alert ">{error}</div>}
    </div>
  );
};

const FileInput = ({ className='', iconClass='', name, error, ...rest }) =>{
  return (
    <div className="mb-3 ">
      <div className={`input-group ${className}`}>
          <input {...rest} name={name} id={name} className="form-control"/>
          <div className="input-group-append">
              <div className="input-group-text">
                <span className={`${iconClass===''?"fas fa-envelope":iconClass}`}></span>
              </div>
          </div>
      </div>
      {error && <div className="alert red-alert ">{error}</div>}
    </div>
  );
}

export {Input,InputAppendGroup,FileInput};
