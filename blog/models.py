from django.db import models
from django.utils.text import slugify, Truncator


class Category(models.Model):
    class Meta:
        verbose_name = "Categories"
        verbose_name_plural = "Category"

    category = models.CharField(max_length=100)

    slug = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.category

    def save(self, *args, **kwargs):
        self.slug = slugify(self.category)
        super().save(*args, **kwargs)


class Post(models.Model):

    # author = models.ForeignKey()

    title = models.CharField(max_length=255)
    content = models.TextField()
    excerpt = models.TextField(blank=True, default="")

    slug = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=False)
    updated_at = models.DateTimeField(auto_now=True)

    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.slug == "":
            self.slug = slugify(self.title)

        if self.excerpt == "":
            self.excerpt = Truncator(self.content).words(30)

        super().save(*args, **kwargs)
