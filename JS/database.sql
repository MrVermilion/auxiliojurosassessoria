
create table "public"."usuario" (  
  usucodigo serial not null,
  usunome varchar(200) not null,
  ususenha varchar(100) not null,
  usulogin varchar(100) not null,
  constraint usuario_pkey primary key (usucodigo)
)