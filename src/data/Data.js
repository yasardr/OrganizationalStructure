const Data = {
    id: 0,
    name: 'Angeles S.A de C.V.',
    institutions: [
        {
            id: 1,
            name: 'Pedregal 2',
            departments: [
                {
                    id: 2,
                    name: 'Departamento de emergencias',
                    others: [
                        {
                            id: 3,
                            name: 'Emergencia Adulto',
                            services: [
                                {
                                    id: 4,
                                    name: 'Sala de choque',
                                    items: [
                                        {
                                            id: 5,
                                            name: 'Consulta general',
                                            description: 'Homeopática sin horario'
                                        },
                                        {
                                            id: 6,
                                            name: 'Consulta de cardiología',
                                            description: 'Adultos Revisión'
                                        }
                                    ]
                                },
                                {
                                    id: 7,
                                    name: 'Sala de observación',
                                    items: [
                                        {
                                            id: 14,
                                            name: 'Otro mas',
                                            description: 'Homeopática sin horario'
                                        },
                                        {
                                            id: 15,
                                            name: 'Uno mas 2',
                                            description: 'Adultos Revisión'
                                        }
                                    ]
                                },
                                {
                                    id: 8,
                                    name: 'Sala de emergencia',
                                    items: []
                                }
                            ]
                        },
                        {
                            id: 9,
                            name: 'Emergencia Infantil',
                            services: []
                        }
                    ]
                }
            ]
        },
        {
            id: 10,
            name: 'Acoxpa',
            departments: [
                {
                    id: 13,
                    name: 'Departamento de emergencias',
                    others: []
                }
            ]
        },
        {
            id: 11,
            name: 'Interlomas',
            departments: []
        },
        {
            id: 12,
            name: 'Roma',
            departments: []
        }
    ],
    cont: 15
};

export default Data;