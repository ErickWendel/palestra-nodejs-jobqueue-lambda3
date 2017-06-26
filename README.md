# palestra-nodejs-jobqueue-lambda3
Exemplos executados na palestra sobre Node.js e Job/Task Queue
## Cenário

 - Uma API qualquer inserindo informações no MongoDB
 - Um CRON (serviço períodico) olha as alterações nesta collection
 - Obtem as informações, calcula seus totais, adiciona em outra collection e atualiza a atual
 - Caso ocorra algum problema, o sistema tentará executar mais 4 vezes
 - As tarefas são registradas e enfileiradas no Redis através da lib Bee-queue, inspirada na Kue e Bull
 
## Ambiente
  - Node.js v7 +
  - Redis
  - MongoDB
  
## Rodando
  - via docker
    ```docker-compose up --build```
   - local
      - rodar em cada uma das pastas (sender/ e subcriber/)
      ``` 
       npm i  
       npm i -g pm2  
       pm2 start index.js  
       
      ```
      - e entao, para monitorar os logs
      ``` 
        pm2 monit 0
        pm2 monit 1
        
      ```
  ## Monitorando Redis
   
      redis-cli monit  
  
