import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {  Button, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LocalStoragePage(){
    const [ name, setName ] = useState("");
    const [ kelas, setKelas ] = useState("");
    const [ umur, setUmur ] = useState("");
    const [ jurusan, setJurusan ] = useState("");

    const storedAll = async () => {
        await AsyncStorage.setItem("name",name);
        await AsyncStorage.setItem("kelas",kelas);
        await AsyncStorage.setItem("umur",umur);
        await AsyncStorage.setItem("jurusan",jurusan);
    }


    const getAll = async () => {
        const storedName = await AsyncStorage.getItem("name");
        const storedKelas = await AsyncStorage.getItem("kelas");
        const storedUmur = await AsyncStorage.getItem("umur");
        const storedJurusan = await AsyncStorage.getItem("jurusan");

        if (storedName) setName(storedName);
        if (storedKelas) setKelas(storedKelas);
        if (storedUmur) setUmur(storedUmur);
        if (storedJurusan) setJurusan(storedJurusan);
    }

    const deleteAll = async () => {
        await AsyncStorage.removeItem("name");
        await AsyncStorage.removeItem("kelas");
        await AsyncStorage.removeItem("umur");
        await AsyncStorage.removeItem("jurusan");

        setName("");
        setKelas("");
        setUmur("");
        setJurusan("");
    }

    return(
        <SafeAreaView>
            <Text>Nama : {name} </Text>
            <TextInput placeholder="Masukan Nama" onChangeText={setName}/>
            
            <Text>Kelas : {kelas} </Text>
            <TextInput placeholder="Masukan Kelas" onChangeText={setKelas}/>

            <Text>Umur : {umur} </Text>
            <TextInput placeholder="Masukan umur" onChangeText={setUmur}/>

            <Text>Jurusan : {jurusan} </Text>
            <TextInput placeholder="Masukan Jurusan" onChangeText={setJurusan}/>

            <Button title="Simpan" onPress={storedAll}/>                
            <Button title="Hapus" onPress={deleteAll}/>                
            <Button title="Ambil" onPress={getAll}/>  
        </SafeAreaView>
    );
}
