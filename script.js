'use strict' ;

const firstNestingSearchObject = {
    "name": "Leanne Graham",
    "username": "Bret",
}

const secondNestingSearchObject = {
    "email": "Julianne.OConner@kory.org",
    "address": {
        "street": "Hoeger Mall",
        "city": "South Elvis",
    }
}

const thirdNestingSearchObject = {
    "address": {
        "zipcode": "58804-1099",
        "geo": {
            "lat": "24.8918",
        }
    }
}

const mainFunction = soughtObject =>

    users.filter( object =>        
        {
            let flag = false ;
            return (function searchFunction ( searchObject , objectFromArray ) {
            
                for( let key in searchObject ) {
                    if( typeof searchObject[ key ] !== 'object' ) {
                        if( String( searchObject[ key ] ) === String( objectFromArray[ key ] ) ) {
                            flag = true;
                        }
                        else {
                            if( flag === true ) {
                                flag = false ;
                                return ;
                            }
                            flag = false ;
                        }
                    }
                    else {                    
                        searchFunction ( searchObject[ key ] , objectFromArray[ key ] ) ;
                    }
                }
                return flag ;
            }( soughtObject , object )) 
        }
    ) ;

    console.log( `Поиск первого уровня вложенности ${JSON.stringify( firstNestingSearchObject )}` ) ;
    mainFunction( firstNestingSearchObject ).forEach( object => {                                       //вывод пользователей
        console.log( object ) ;
    } ) ;
    
    console.log( `Поиск второго уровня вложенности ${JSON.stringify( secondNestingSearchObject )} `) ;
    mainFunction( secondNestingSearchObject ).forEach( object => {                                      //вывод пользователей
        console.log( object ) ;
    } ) ;
    
    console.log( `Поиск третьего уровня вложенности ${JSON.stringify( thirdNestingSearchObject )} `); 
    mainFunction( thirdNestingSearchObject ).forEach( object => {                                       //вывод пользователей
        console.log( object ) ;
    } ) ;