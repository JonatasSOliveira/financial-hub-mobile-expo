export interface EnterpriseAttributes {
    name: string
}

export default class Enterprise {
    private name: string;
  
    constructor({name}: EnterpriseAttributes) {
      this.nane = nane;
    }
  
    getRaw(): EnterpriseAttributes {
      return {
        name: this.name,
      };
    }
  }
  