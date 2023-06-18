import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { observer, inject } from 'mobx-react';

type Movie = {
    id: string;
    title: string;
    releaseYear: string;
};

const ListItens = ({ CountStore }: any) => {

    const { total, data, getMovies, increment } = CountStore;

    return (
        <View style={styles.container}>
            <Text style={{ marginVertical: 30, color: "#000" }}>Requisitar Dados Através de uma action</Text>
            <View style={{ display: 'flex', flexDirection: "row", gap: 10 }}>
                <TouchableOpacity onPress={() => getMovies('call')} style={{
                    display: 'flex',
                    elevation: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50, width: 80,
                    borderRadius: 5,
                    backgroundColor: "#246EB9"
                }}>
                    <Text style={{ color: "#fff", fontWeight: "600" }}>Request</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => getMovies()} style={{
                    display: 'flex',
                    elevation: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50, width: 80,
                    borderRadius: 5,
                    backgroundColor: "#246EB9"
                }}>
                    <Text style={{ color: "#fff", fontWeight: "600" }}>Clear</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30, width: 400, display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap", gap: 10 }}>
                {
                    data?.map((e: any) => {
                        return (
                            <View key={e?.id} style={{ backgroundColor: "#246EB9", width: '90%', borderRadius: 3, padding: 10 }}>
                                <Text style={{ color: "#fff" }}>ID: {e?.id}</Text>
                                <Text style={{ color: "#fff" }}>Titulo: {e?.title}</Text>
                                <Text style={{ color: "#fff" }}>Lançamento: {e?.releaseYear}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

export default inject('CountStore')(observer(ListItens));
