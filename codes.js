const codes = [

`export const data = {
//  +---------------------------------+
//  | O O   J S   D E P E N D E N C Y |
//  +---------------------------------+
//  | Author                  My Name |
/*  |*/ depName:           'myDep' // |
//  +---------------------------------+
/*  | */ prerequisites: [          // |
/*  +---------------------------------+ */ 
/*  | 1 */ 'myFirstOldDep'         // |
,/* | 2 */ 'mySecondOldDep'        // |
//  +---------------------------------+
]}


export default function(a, b) {
    // ...
}

export function myUsefulFunction(a, b = null, c = null) {
    // ...
}

export var myVariable = myUsefulFunction('a', 'b', 'c');
`
,
`OO.use('my-new-dependency')

OO.myDep(2,3) // default function

OO.myDep.myUsefulFunction('y') // another function

OO('form.open#contact').save('contact_form')

OO.get('contact_from').find('button.send-us').onClick(e => {
    if (OO.get('contact_form').find('input[name="text"]').val().length == 0)
        OO.get('contact_form').find('.error-msg')
            .text('متن درخواست خالیست!')
            .css({
                color: 'red',
                fontWeight: 'bold',
                borderColor: 'red'
            })
    else {
        // code to send an ajax request
    }
})`
,
`<html attr="value">`


]