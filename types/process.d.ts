type process = {
  env: {
    REACT_APP_JWT_SECRET: string;
  };
};

export { process };
/* Modules are executed within their own scope, not in the global scope; this means that variables, 
functions, classes, etc. declared in a module are not visible outside the module unless they are 
explicitly exported using one of the export forms.*/
