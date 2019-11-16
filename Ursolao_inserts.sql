select * from clients;
insert into clients (cli_name,cli_email, cli_password, cli_countrycode, cli_areacode, cli_telephone, cli_zipcode) values ('Arthur Sales','arthur@ursolao.com.br','123','55','11','912345678','08761234');
insert into clients (cli_name,cli_email, cli_password, cli_countrycode, cli_areacode, cli_telephone, cli_zipcode) values ('Alice Chuang','alice@gmail.com','123','55','11','912345678','08761234');
insert into clients (cli_name,cli_email, cli_password, cli_countrycode, cli_areacode, cli_telephone, cli_zipcode) values ('Andre Coelho','andre@gmail.com.br','123','55','11','912345678','08761234');

select * from status;
insert into status values ('ENA','Enabled');
insert into status values ('DIS','Disabled');

select * from categories_items;
insert into categories_items (cai_descr, sta_code) values ('Clothes','ENA');
insert into categories_items (cai_descr, sta_code) values ('Shoes','ENA');
insert into categories_items (cai_descr, sta_code) values ('Toys','ENA');
insert into categories_items (cai_descr, sta_code) values ('Tools','DIS');

select * from items;
insert into items (itm_title, itm_descr, itm_photo, cai_code) values ('Vestido Floral','Vestido floral com decote V, acinturado','vestido.jpg',1);
insert into items (itm_title, itm_descr, itm_photo, cai_code) values ('Camiseta regata','Camiseta regata lisa branca','camiseta.jpg',1);
insert into items (itm_title, itm_descr, itm_photo, cai_code) values ('Sapato social 48','Sapato social, bico fino, preto','sapato.jpg',2);
insert into items (itm_title, itm_descr, itm_photo, cai_code) values ('Sandálias Havaianas','Chinelo de dedo, tema "Alice no País das Maravilhas", tamanho 33','chinelo.jpg',2);
insert into items (itm_title, itm_descr, itm_photo, cai_code) values ('Boneca Bebê','Boneca bebê, com chupeta e fralda','boneca.jpg',3);
insert into items (itm_title, itm_descr, itm_photo, cai_code) values ('Barraca da Mônica','Barraca em formato de casa, com tema da Turma da Mônica','barraca.jpg',1);

select * from clients_items;
insert into clients_items values (1,1,'ENA');
insert into clients_items values (2,2,'ENA');
insert into clients_items values (4,3,'ENA');
insert into clients_items values (3,4,'ENA');
insert into clients_items values (3,5,'DIS');
insert into clients_items values (3,6,'ENA');

select * from lendings;
insert into lendings (lnd_cliowner, lnd_clirequester, lnd_startdate, lnd_enddate, lnd_grntmrg, sta_code) values (1,2,'20191101','20191130',10,'ENA');
insert into lendings (lnd_cliowner, lnd_clirequester, lnd_startdate, lnd_enddate, lnd_grntmrg, sta_code) values (2,3,'20191101','20191130',10,'ENA');
insert into lendings (lnd_cliowner, lnd_clirequester, lnd_startdate, lnd_enddate, lnd_grntmrg, sta_code) values (1,4,'20191101','20191130',10,'ENA');
delete from lendings where lnd_code = 1;

select * from lendings_items;
insert into lendings_items value (2,1,'ENA');
insert into lendings_items value (3,2,'ENA');
insert into lendings_items value (4,1,'ENA');







