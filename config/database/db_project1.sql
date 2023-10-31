PGDMP  '    ;            	    {            project1    15.4    16.0                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    16631    project1    DATABASE     �   CREATE DATABASE project1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE project1;
                postgres    false            �            1259    16642    reflections    TABLE       CREATE TABLE public.reflections (
    id integer NOT NULL,
    success text NOT NULL,
    low_point text NOT NULL,
    take_away text NOT NULL,
    userid integer,
    createdat timestamp with time zone DEFAULT now(),
    updatedat timestamp with time zone DEFAULT now()
);
    DROP TABLE public.reflections;
       public         heap    postgres    false            �            1259    16641    reflections_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reflections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.reflections_id_seq;
       public          postgres    false    217                       0    0    reflections_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.reflections_id_seq OWNED BY public.reflections.id;
          public          postgres    false    216            �            1259    16633    users    TABLE     }   CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(50) NOT NULL,
    password text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16632    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    215                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            k           2604    16645    reflections id    DEFAULT     p   ALTER TABLE ONLY public.reflections ALTER COLUMN id SET DEFAULT nextval('public.reflections_id_seq'::regclass);
 =   ALTER TABLE public.reflections ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            j           2604    16636    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215                      0    16642    reflections 
   TABLE DATA           f   COPY public.reflections (id, success, low_point, take_away, userid, createdat, updatedat) FROM stdin;
    public          postgres    false    217                    0    16633    users 
   TABLE DATA           4   COPY public.users (id, email, password) FROM stdin;
    public          postgres    false    215   �                  0    0    reflections_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.reflections_id_seq', 4, true);
          public          postgres    false    216                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 4, true);
          public          postgres    false    214            q           2606    16651    reflections reflections_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.reflections
    ADD CONSTRAINT reflections_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.reflections DROP CONSTRAINT reflections_pkey;
       public            postgres    false    217            o           2606    16640    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            r           2606    16652 #   reflections reflections_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reflections
    ADD CONSTRAINT reflections_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.reflections DROP CONSTRAINT reflections_userid_fkey;
       public          postgres    false    3183    217    215               V   x�3�tI,ITI-��,�����/.Q���K�.�J�$�*��sq��*Z� �����������~Y�=... ��         �   x�m��r�0 @ѵ���R��8HA��M�GM *���L����kL�WbQpZݴS�'SĦ�>u3�",�c�-�M;oWʍ�R�l�i�{E���B��v���G �r����Jq�a�.LTAX�4R�Te~��7G�-�A4��q��Źa10���o��P4�wa-v�p|?Z�K�r�#%�$z��ȡwz$=_�B��`6��}q�S�\����>i�hk�R�"L.�c�s����.q����Q�.|j �ےfn     