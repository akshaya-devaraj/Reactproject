import React from 'react'

export default function Listex() {
    const Cars=[{model:"AUDI",id:1},
    {model:"BMW",id:2},
    {model:"SWIFT",id:3},
    {model:"ALTO",id:4}];
  return (
    <h1>{Cars.map(
    (val)=>
    <li key={val.id}>{val.model}</li>)}
    </h1>
  )
}
