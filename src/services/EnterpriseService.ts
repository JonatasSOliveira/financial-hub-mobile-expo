import { supabase } from "../libs/supabase";
import Enterprise from "../models/Enterprise";

export default class EnterpriseService {
    supabaseTable = supabase.from('enterprise')

    async create(enterprise: Enterprise): Promise<void> {
        const { error } = await this.supabaseTable.insert(
            enterprise.getRaw()
        );
    }

    async findAll(): Promise<Enterprise[]> {
        const { data, error } = await this.supabaseTable.select();
        return data.map(enterpriseAttrs => new Enterprise(enterpriseAttrs));
    }
}