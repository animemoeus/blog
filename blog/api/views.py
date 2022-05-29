from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

from blog.models import Post
from .serializers import PostSerializer


def index(request):
    return HttpResponse("arter")


@api_view()
def posts(request):
    queryset = Post.objects.all()

    paginator = PageNumberPagination()
    paginator.page_size = 7

    result = paginator.paginate_queryset(queryset, request)
    serializer = PostSerializer(result, many=True)

    return paginator.get_paginated_response(serializer.data)
