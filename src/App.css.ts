import { style } from '@vanilla-extract/css'

export const formContainer = style({
    borderRadius: '10px',
    padding: '48px',
    width: '50%',
    boxShadow: '2px 2px 2px #e9e9e9',
    background: 'white'
});

export const flexContainer = style({
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //height: '90vh', // Set the height of the container to the full viewport height
  });

export const selectContainer = style({
    width: '50%',
});

export const componentPadding = style({
    padding: '15px',
});

export const dividerPadding = style({
    paddingTop: '15px',
    paddingBottom: '15px',
})

export const editSectionButton = style({
    minHeight: '0px',
    height: '36px'
})