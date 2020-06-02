# bootstrap-animate-css
It implement animate.css animation to bootstrap such as modal. you can browse any animation they have at https://animate.style/

Just load `bootstarp-animate-css.js` at the bottom of jquery loader.
```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="../bootstrap-animate-css.js"></script>
```

## Modal
You can use animation when modal appear and/or disappear.

It automatically search modal with class modal and set the event itself.

```
<div class="modal" data-animate-in='animate__zoomInUp' data-animate-out='animate__flipOutY'>
	...
</div>
```

Attribute | Optional | Description
------------ | ------------- | -------------
data-animate-in | optional | animate.css class name, animation happen when modal appear
data-animate-out | optional | animate.css class name, animation happen when modal disappear



If you add new modal after the page loaded, you can manually apply the event by using this function:
```
$('.modal').bmcModal();
```


## In the future release
We will implement animate.css to all the javascript bootstrap had.