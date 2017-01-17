# Reactkomponenter
Alla Reactkomponenter ska vara "pure" och inte ha några side effects. Samma props ska alltid 
rendera exakt samma komponent. Redux bör används för allt state, bara vissa komponenter behöver ett intern state (exempel `Input`), 
detta kan vara för att komponenten ska vara en s.k. `controlled component`. Dessa komponenter kan 
skrivas med arrow function-syntaxet (exempel `MoneyDistributionWorker`). Bör försöka undvika Reacts 
life-cycle-funktioner så långt det går. Dessa är ibland nödvändliga (inte riktigt, men typ), t.ex. om man vill populera storen
onload.

# Immutable.js
Enbart `Immutable.js` används i storen för att man ska veta att storen bara
kan manipuleras genom att dispatcha actions.

# redux-thunk
`redux-thunk` gör att man kan returnera en funktion i en action creator.
Detta kan användas när en action creator behöver skicka requests, dispatcha flera actions eller 
kolla validering/conditions innan dispatch av action (exempel `setWorkerNet` i `invoice-builder-actions.js`).

# Listeners
Lyssnar på ändringar i storen och dispatchar actions vid vissa conditions (exempel `toggleExpressPayment`).

# Selectors
Tar en del av storen och returnerar en manipulerad version av delen. 
Kan till exempel filtera, sortera eller ändra struktur (exempel `getById`).

# Logik
Logik bör läggas i `reducers`, `action creators`, `selectors` eller `listeners` för att logiken ska
vara lätt testa. Exempel på ett asynx action creator test finns i `invoice-builder-actions.spec.js`.
Exempel på två olika typer av `listener`-tester finns i `invoice-builder-listeners.spec.js`.