import React from 'react'
import { render } from '@testing-library/react';
import Episodes from './Episodes'

test('Episodes renders', ()=> {
    render(<Episodes episodes={[]} />)
})
 
