from django.contrib import admin

from .models import Category, Post


class PostAdmin(admin.ModelAdmin):
    readonly_fields = ("updated_at",)


admin.site.register(Category)
admin.site.register(Post, PostAdmin)
