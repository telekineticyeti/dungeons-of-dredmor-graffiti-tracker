### Install dependencies
```
npm install @ngrx/schematics --save-dev
npm install @ngrx/store @ngrx/store-devtools --save
```

### Angular CLI setup
Using Angular CLI with ngrx schematics to generate NgRx boilerplate code

```
# Create the store
ng g @ngrx/schematics:store State --root --module app.module.ts

# Create a reducer (in reducers folder)
ng g @ngrx/schematics:reducer <REDUCER_NAME> --group

# Create an action (in actions folder)
ng g @ngrx/schematics:action <ACTION_NAME> --group
```


```
ng g @ngrx/schematics:action ACTION_NAME --creators --group
ng g @ngrx/schematics:reducer ReducerName --creators --group
ng g @ngrx/schematics:effect EffectName --creators --group
ng g @ngrx/schematics:entity EntityName --creators --group
ng g @ngrx/schematics:feature FeatureName --creators --group
```