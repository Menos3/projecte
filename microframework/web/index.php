<?php require_once __DIR__ . "../../vendor/autoload.php"; ?>
<?php
   My\Helpers::log()->info("Entro a la pàgina d'inici");
   My\Helpers::log()->debug("Entro a una pàgina", ["page" => basename(__FILE__)]);
?>

<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php") ?>
<body>
<img class="imagen" src="/_commons/img/logo.png " alt=" ">
   <?= My\Helpers::render("/_commons/header.php") ?>
   <img class="perfil" src="/_commons/img/perfil-del-usuario.png" alt=" ">
    <aside>
        <nav id="menu ">
            <ul class="acordeon ">
                <li><a href="# ">Comandas <span class=acordeon__emoji>▼</span></a>
                    <ul>
                        <li><a href=" ">Dar de alta empresa</a></li>
                        <li><a href=" ">Buscar artículos</a></li>
                        <li><a href=" ">Pedido expres</a></li>
                        <li><a href=" ">Consultar comandas</a></li>
                    </ul>
                </li>
                <li><a href="# ">Tareas<span class=acordeon__emoji>▼</span></a>
                    <ul>
                        <li><a href=" ">Crear tarea</a></li>
                        <li><a href=" ">Editar tarea</a></li>
                        <li><a href=" ">Cambiar estado</a></li>
                    </ul>
                </li>
                <li><a href="# ">Incidencias<span class=acordeon__emoji>▼</span></a>
                    <ul>
                        <li><a href=" ">Crear incidencia</a></li>
                        <li><a href=" ">Visualización incidencias</a></li>
                        <li><a href=" ">Editar incidencias</a></li>
                        <li><a href=" ">Borrar incidencia</a></li>
                    </ul>
                </li>
                <li><a href="# ">Seguridad<span class=acordeon__emoji>▼</span></a>
                    <ul>
                        <li><a href=" ">Visualizar lista de permisos</a></li>
                        <li><a href=" ">Editar Permisos</a></li>
                        <li><a href=" ">Crear Permisos</a></li>
                        <li><a href=" ">Eliminar Permisos</a></li>
                        <li><a href=" ">Visualizar lista de roles</a></li>
                    </ul>
                </li>
                <li><a href="# ">Mensajeria<span class=acordeon__emoji>▼</span></a>
                    <ul>
                        <li><a href=" ">Opción 3.1</a></li>
                        <li><a href=" ">Opción 3.2</a></li>
                    </ul>
                </li>
                <li><a href="# ">Inventario<span class=acordeon__emoji>▼</span></a>
                    <ul>
                        <li><a href=" ">Opción 3.1</a></li>
                        <li><a href=" ">Opción 3.2</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </aside>
    <section>
        <img src="_commons/img/logo.png" alt="">
    </section>
    <aside class="floatDerecha ">
        <div id="calendario " class="contorno ">
            <a href=""><img src="_commons/img/calendario.jpeg" alt=""></a>
        </div>
        <div id="tareas " class="contorno ">
            <ul class="acordeon ">
                <div>
                    <li><a href=" ">Incidencias <span class=acordeon__emoji>‼</span></a>
                        <ul>

                            <li>
                                <div class='acordeon__item'>
                                    <div class="acordeon__item_color "></div><a href=" ">incidencia 1</a>
                                </div>
                            </li>
                            <li>
                                <div class='acordeon__item'>
                                    <div class="acordeon__item_color "></div><a href=" ">incidencia 2</a>
                                </div>
                            </li>
                            <li>
                                <div class='acordeon__item'>
                                    <div class="acordeon__item_color "></div><a href=" ">incidencia 3</a>
                                </div>
                            </li>
                            <li>
                                <div class='acordeon__item'>
                                    <div class="acordeon__item_color "></div><a href=" ">incidencia 4</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </div>
            </ul>
        </div>
        <div class="contorno " id="chat ">
            <ul class="acordeon ">
                <div>
                    <li><a href=" ">Chat <span class=acordeon__emoji>✉</span></a>
                        <ul>
                            <li><a href=" ">Paquito</a></li>
                            <li><a href=" ">Manolo</a></li>
                            <li><a href=" ">Sergio</a></li>
                            <li><a href=" ">Xavi</a></li>
                        </ul>
                    </li>
                </div>
            </ul>
        </div>
    </aside>
   <?= My\Helpers::render("/_commons/footer.php") ?>
</body>
</html>