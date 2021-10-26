<?php $flash = My\Helpers::flash(); ?>
<?php if (!empty($flash)): ?>
<div class="flash">
   <ul>
       <?php foreach ($flash as $msg): ?>
       <li class="flash__message"><?= $msg ?></li>
       <?php endforeach; ?>
   </ul>
</div>
<?php endif; ?>
