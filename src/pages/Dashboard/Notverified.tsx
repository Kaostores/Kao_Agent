import React, {useState} from 'react'

const Notverified = () => {
    const tableItems = [
        {
            name: "1",
            date: "2356477",
            status: "Verified",
            price: "Zoro Roronoa",
            plan: "Small Village, East Blue",
            phone: "+234 02356477",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "2",
            date: "7688801",
            status: "Verified",
            price: "Nico Robin",
            plan: "The Lost Island, Grandline",
            phone: "+234 07688801",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "3",
            date: "0032648",
            status: "Verified",
            price: "Sanji Vinsmoke",
            plan: "The Lost Island, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "4",
            date: "9237584",
            status: "Verified",
            price: "Tony Chopper",
            plan: "Vinsmoke Island, East Blue",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "5",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Drum Island, Castle, Geandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "6",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "7",
            date: "09365322",
            status: "Verified",
            price: "Brook",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "8",
            date: "09533555",
            status: "Verified",
            price: "Jinbe",
            plan: "Lost Ship, Park",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "9",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Atlantia,   Sea barrel ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "10",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Small Village ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "11",
            date: "2356477",
            status: "Verified",
            price: "Zoro Roronoa",
            plan: "Small Village, East Blue",
            phone: "+234 02356477",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "12",
            date: "7688801",
            status: "Verified",
            price: "Nico Robin",
            plan: "The Lost Island, Grandline",
            phone: "+234 07688801",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "13",
            date: "0032648",
            status: "Verified",
            price: "Sanji Vinsmoke",
            plan: "The Lost Island, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "14",
            date: "9237584",
            status: "Verified",
            price: "Tony Chopper",
            plan: "Vinsmoke Island, East Blue",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "15",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Drum Island, Castle, Geandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "16",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "17",
            date: "09365322",
            status: "Verified",
            price: "Brook",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "18",
            date: "09533555",
            status: "Verified",
            price: "Jinbe",
            plan: "Lost Ship, Park",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "19",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Atlantia,   Sea barrel ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "20",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Small Village ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "21",
            date: "2356477",
            status: "Verified",
            price: "Zoro Roronoa",
            plan: "Small Village, East Blue",
            phone: "+234 02356477",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "22",
            date: "7688801",
            status: "Verified",
            price: "Nico Robin",
            plan: "The Lost Island, Grandline",
            phone: "+234 07688801",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "23",
            date: "0032648",
            status: "Verified",
            price: "Sanji Vinsmoke",
            plan: "The Lost Island, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "24",
            date: "9237584",
            status: "Verified",
            price: "Tony Chopper",
            plan: "Vinsmoke Island, East Blue",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "25",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Drum Island, Castle, Geandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "26",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "27",
            date: "09365322",
            status: "Verified",
            price: "Brook",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "28",
            date: "09533555",
            status: "Verified",
            price: "Jinbe",
            plan: "Lost Ship, Park",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "29",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Atlantia,   Sea barrel ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "30",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Small Village ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "31",
            date: "2356477",
            status: "Verified",
            price: "Zoro Roronoa",
            plan: "Small Village, East Blue",
            phone: "+234 02356477",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "32",
            date: "7688801",
            status: "Verified",
            price: "Nico Robin",
            plan: "The Lost Island, Grandline",
            phone: "+234 07688801",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "33",
            date: "0032648",
            status: "Verified",
            price: "Sanji Vinsmoke",
            plan: "The Lost Island, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "34",
            date: "9237584",
            status: "Verified",
            price: "Tony Chopper",
            plan: "Vinsmoke Island, East Blue",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "35",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Drum Island, Castle, Geandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "36",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "37",
            date: "09365322",
            status: "Verified",
            price: "Brook",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "38",
            date: "09533555",
            status: "Verified",
            price: "Jinbe",
            plan: "Lost Ship, Park",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "39",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Atlantia,   Sea barrel ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "40",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Small Village ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
  ]
  return (
    <div>Notverified</div>
  )
}

export default Notverified