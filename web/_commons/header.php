<?php $flash = My\Helpers::flash(); ?>
<?php if (!empty($flash)): ?>
<div class="flash">
   <ul>
       <?php foreach ($flash as $msg): ?>
       <li class="flash__message"><?= $msg ?></li>
       <?php endforeach; ?>
   </ul>
</div>
<header>

            <nav>
                <ul class="menu ">
                    <li><a href=" ">Comanda</a></li>
                    <li><a href=" ">Tareas</a></li>
                    <li><a href=" ">Incidencias</a></li>
                    <li><a href=" ">Seguridad</a></li>
                    <li><a href=" ">Inventario</a></li>
                    <li><a href=" ">Mensajeria</a></li>
                </ul>

                <div class="botonera">
                    <div class="botonera--boton">
                        <a href=""><img src="_commons/img/boton-de-activacion.png" alt=""></a>
                    </div>
                    <div class="botonera--boton">
                        <a href=""><img src="_commons/img/buscar.png" alt=""></a>
                    </div>
                    <div class="botonera--boton">
                        <a href=""><img src="_commons/img/mas.png" alt=""></a>
                    </div>
                    <div class="botonera--boton">
                        <a href=""><img src="_commons/img/eliminar.png" alt=""></a>
                    </div>
                    <div class="botonera--boton">
                        <a href=""><img src="_commons/img/editar(1).png" alt=""></a>
                    </div>
                </div>
            </nav>


        </header>
<?php endif; ?>
