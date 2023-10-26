import { View, Text, TextInput } from 'react-native'
import React from 'react'
import EnterpriseService from "../../../services/EnterpriseService";
import Enterprise from "../../../models/Enterprise";

export default function EnterpriseForm() {
    const enterpriseService = new EnterpriseService();

    const [name, setName] = useState('');

    async function saveEnterprise() {
        const enterprise = new Enterprise({ name });
        await enterpriseService.create(enterprise);
    }

    return (
        <View>
            <TextInput placeholder="Nome da Empresa" onChangeText={setName} value={name} />
            <TouchableOpacity onPress={saveEnterprise}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}